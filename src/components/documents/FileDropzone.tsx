import { Camera, FileUp, UploadCloud } from "lucide-react";
import { useRef, useState, type DragEvent } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface PickedFile {
  name: string;
  size: number;
  type: string;
  previewUrl: string | null;
}

export function FileDropzone({ onFile }: { onFile: (file: PickedFile) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const handleFiles = (files: FileList | null) => {
    const file = files?.[0];
    if (!file) return;
    onFile({
      name: file.name,
      size: file.size,
      type: file.type || "application/octet-stream",
      previewUrl: file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
    });
  };

  const onDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    handleFiles(event.dataTransfer.files);
  };

  return (
    <div className="space-y-4">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        className={cn(
          "rounded-2xl border-2 border-dashed bg-secondary/40 px-6 py-12 text-center transition-colors",
          dragging ? "border-primary bg-primary/5" : "border-border",
        )}
      >
        <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-card text-primary shadow-card">
          <UploadCloud aria-hidden="true" className="size-7" />
        </span>
        <h3 className="mt-4 text-base font-semibold text-foreground">Upload Document</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Drag &amp; drop your document here, or{" "}
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            click to browse
          </button>
        </p>
        <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          JPG • PNG • WEBP • PDF
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,application/pdf"
          className="sr-only"
          aria-label="Choose a document to upload"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button variant="outline" className="flex-1" onClick={() => inputRef.current?.click()}>
          <Camera className="size-4" /> Camera
        </Button>
        <Button className="flex-1" onClick={() => inputRef.current?.click()}>
          <FileUp className="size-4" /> Upload Document
        </Button>
      </div>
    </div>
  );
}
