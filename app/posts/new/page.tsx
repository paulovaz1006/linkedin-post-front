import { PostEditor } from "@/components/posts/post-editor";

export default function NewPostPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">
          Novo post
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Crie, revise e publique seu conteúdo no LinkedIn.
        </p>
      </div>

      <PostEditor />
    </div>
  );
}