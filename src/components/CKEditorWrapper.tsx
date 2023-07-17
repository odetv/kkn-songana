import React from "react";
import { CKEditor } from "ckeditor4-react";

interface CKEditorWrapperProps {
    value: string;
    onChange: (newContent: string) => void;
}

const CKEditorWrapper: React.FC<CKEditorWrapperProps> = ({
    value,
    onChange,
}) => {
    const handleEditorChange = (event: any) => {
        onChange(event.editor.getData());
    };

    return <CKEditor value={value} onChange={handleEditorChange} />;
};

export default CKEditorWrapper;
