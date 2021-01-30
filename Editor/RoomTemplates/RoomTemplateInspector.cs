﻿using System;
using System.Text;
using Edgar.Unity.Diagnostics;
using UnityEditor;
using UnityEditor.Experimental.SceneManagement;
using UnityEngine;

namespace Edgar.Unity.Editor
{
    [CustomEditor(typeof(RoomTemplateSettings))]
    public class RoomTemplateInspector : UnityEditor.Editor
    {
        public override void OnInspectorGUI()
        {
            serializedObject.Update();

            DrawDefaultInspector();

            var roomTemplate = (RoomTemplateSettings) target;
            var validityCheck = RoomTemplateDiagnostics.CheckAll(roomTemplate.gameObject);

            if (!validityCheck.HasErrors)
            {
                EditorGUILayout.HelpBox("The room template is valid.", MessageType.Info);
            }
            else
            {
                var sb = new StringBuilder();
                sb.AppendLine("There are some problems with the room template:");

                var errors = string.Join("\n", validityCheck.Errors);
                sb.Append(errors);

                EditorGUILayout.HelpBox(sb.ToString(), MessageType.Error);
            }

            var hasOutlineOverride = roomTemplate.HasOutlineOverride();

            EditorGUILayout.HelpBox($"Using outline override: {hasOutlineOverride}", MessageType.None);

            if (hasOutlineOverride)
            {
                if (GUILayout.Button("Remove outline override", EditorStyles.miniButton))
                {
                    roomTemplate.RemoveOutlineOverride();
                }
            }
            else
            {
                if (GUILayout.Button("Add outline override", EditorStyles.miniButton))
                {
                    roomTemplate.AddOutlineOverride();
                }
            }

            var boundingBoxOutlineHandler = roomTemplate.GetComponent<BoundingBoxOutlineHandler>();
            var boundingBoxRemoved = false;

            if (boundingBoxOutlineHandler == null)
            {
                if (GUILayout.Button("Add bounding box outline handler", EditorStyles.miniButton))
                {
                    roomTemplate.gameObject.AddComponent<BoundingBoxOutlineHandler>();
                    EditorUtility.SetDirty(roomTemplate);
                }
            }
            else
            {
                if (GUILayout.Button("Remove bounding box outline handler", EditorStyles.miniButton))
                {
                    DestroyImmediate(boundingBoxOutlineHandler, true);
                    boundingBoxRemoved = true;
                    EditorUtility.SetDirty(roomTemplate);
                }
            }

            serializedObject.ApplyModifiedProperties();

            if (boundingBoxRemoved)
            {
                GUIUtility.ExitGUI();
            }
        }

        private void OnSceneGUI()
        {
            RemoveOnSceneGUIDelegate();
            AddOnSceneGUIDelegate();
            ShowStatus();
        }

        private void ShowStatus()
        {
            var roomTemplate = (RoomTemplateSettings)target;
            var originalBackground = GUI.backgroundColor;

            Handles.BeginGUI();
            GUILayout.BeginArea(new Rect(10, 10, 180, 100));
            GUILayout.BeginVertical(EditorStyles.helpBox);

            GUILayout.Label("Room template status", EditorStyles.boldLabel);

            var isOutlineValid = roomTemplate.GetOutline() != null;
            var outlineText = isOutlineValid ? "valid" : "<color=red>invalid</color>";
            var areDoorsValid = false;
            var doorsText = "N/A";

            if (isOutlineValid)
            {
                var doorsCheck = RoomTemplateDiagnostics.CheckDoors(roomTemplate.gameObject);
                areDoorsValid = !doorsCheck.HasErrors;
                doorsText = !doorsCheck.HasErrors ? "valid" : "<color=red>invalid</color>";
            }

            GUILayout.Label($"Outline: <b>{outlineText}</b>", new GUIStyle(EditorStyles.label) { richText = true });
            GUILayout.Label($"Doors: <b>{doorsText}</b>", new GUIStyle(EditorStyles.label) { richText = true });

            if (!isOutlineValid || !areDoorsValid)
            {
                GUILayout.Label($"<size=9>See the Room template settings component for details</size>", new GUIStyle(EditorStyles.label) { richText = true, wordWrap = true });
            }

            GUILayout.EndVertical();
            GUILayout.EndArea();
            Handles.EndGUI();

            GUI.backgroundColor = originalBackground;
        }

        private void DrawOutline(SceneView sceneView)
        {
            if (target == null || PrefabStageUtility.GetCurrentPrefabStage() == null)
            {
                RemoveOnSceneGUIDelegate();
                return;
            }

            try
            {
                var roomTemplate = (RoomTemplateSettings) target;
                var outline = roomTemplate.GetOutline();

                if (outline == null)
                {
                    return;
                }

                var points = outline.GetPoints();
                var grid = roomTemplate.GetComponentInChildren<Grid>();

                for (int i = 0; i < points.Count; i++)
                {
                    GridUtils.DrawRectangleOutline(grid, points[i].ToUnityIntVector3(), points[(i + 1) % points.Count].ToUnityIntVector3(), Color.yellow);
                }
            }
            catch (ArgumentException)
            {

            }
        }

        private void AddOnSceneGUIDelegate()
        {
#if UNITY_2019_1_OR_NEWER
            SceneView.duringSceneGui += DrawOutline;
#else
            SceneView.onSceneGUIDelegate += DrawOutline;
#endif
        }

        private void RemoveOnSceneGUIDelegate()
        {
#if UNITY_2019_1_OR_NEWER
            SceneView.duringSceneGui -= DrawOutline;
#else
            SceneView.onSceneGUIDelegate -= DrawOutline;
#endif
        }
    }
}