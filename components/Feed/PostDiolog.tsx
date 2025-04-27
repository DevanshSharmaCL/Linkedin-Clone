"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Image, Images } from "lucide-react";
import ProfilePhoto from "../Shared/ProfilePhoto";
import { useRef, useState } from "react";
import { readFileAsDataURL } from "@/lib/utils";

export function PostDiolog({
  setopen,
  open,
  src,
}: {
  setopen: (open: boolean) => void;
  open: boolean;
  src: string;
}) {
  const [postContent, setPostContent] = useState("");
  const inputRef = useRef<HTMLInputElement>(null); // <-- declare ref properly
  const [selectedFile, setSelectedFile] = useState<string>("");

  const handleOpenChange = (isOpen: boolean) => {
    setopen(isOpen);
    if (!isOpen) {
      setPostContent("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Post submitted:", postContent);
    setopen(false);
    setPostContent("");
  };
  
  //file change handler
  const fileChangeHandler = async (e:React.ChangeEvent<HTMLInputElement>)=>{
    const file = e.target.files?.[0];
    if(file){
      const dataUrl= await readFileAsDataURL(file);
      setSelectedFile(dataUrl);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex gap-2 items-center">
            <ProfilePhoto src={src} />
            <div>
              <div className="font-semibold">Devnash Sharma</div>
              <p className="text-xs text-gray-500">Post to anyone</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <Textarea
              id="postContent"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="Type your message here."
              className="border-none text-lg focus-visible:ring-0"
            />
            <div className="my-4">
                <img
                  src={selectedFile}
                  alt=""
                  className="rounded-md max-w-full h-auto"
                />
              </div>
          </div>

          <DialogFooter className="mt-4 flex justify-between">
            <div className="flex items-center gap-4">
              <Button
                className="gap-2"
                type="button"
                variant="ghost"
                onClick={() => inputRef.current?.click()}
              >
                <Images className="text-blue-500 mr-2" size={20} />
                Media
              </Button>
              <input
                ref={inputRef}
                type="file"
                name="image"
                className="hidden"
                accept="image/*"
                onChange={fileChangeHandler}
              />
            </div>

            <Button type="submit" disabled={!postContent.trim()}>
              Post
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}