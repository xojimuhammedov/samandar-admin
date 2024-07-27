import React, { useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function CKeditor({
  onChange,
  editorLoaded,
  name,
  value,
}: any) {
  const editorRef = useRef<{ CKEditor: typeof CKEditor; ClassicEditor: typeof ClassicEditor }>();
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);

  return (
    <>
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          data={value}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            onChange(data);
          }}
          config={{
            toolbar: [
              'undo', 'redo',
              '|', 'heading',
              '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
              '|', 'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
              '-', // break point
              '|', 'alignment',
              'link', 'uploadImage', 'blockQuote', 'codeBlock',
              '|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent'
            ],
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </>
  );
}