"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";

export function PostEditor() {
  const [content, setContent] = useState("");

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Conteúdo</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Textarea
            placeholder="Escreva seu post..."
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className="min-h-[350px] resize-none"
          />

          <div className="flex justify-between">
            <span className="text-sm text-gray-500">
              {content.length} caracteres
            </span>

            <Button variant="outline">
              <Sparkles />
              Gerar com IA
            </Button>
          </div>

          <div className="flex gap-3">
            <Button className="flex-1">
              Publicar agora
            </Button>

            <Button
              variant="outline"
              className="flex-1"
            >
              Agendar
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="rounded-lg border bg-white p-5">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 font-semibold">
                PV
              </div>

              <div>
                <p className="font-semibold">
                  Paulo Vaz
                </p>

                <p className="text-xs text-gray-500">
                  Desenvolvedor Full Stack
                </p>
              </div>
            </div>

            <div className="whitespace-pre-wrap text-sm">
              {content || (
                <span className="text-gray-400">
                  Seu post aparecerá aqui...
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}