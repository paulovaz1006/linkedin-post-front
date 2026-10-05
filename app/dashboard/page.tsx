    import { Card, CardContent } from "@/components/ui/card";
import { CalendarClock, FileText, Send } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "Total de posts",
    value: "12",
    icon: FileText,
  },
  {
    title: "Agendados",
    value: "3",
    icon: CalendarClock,
  },
  {
    title: "Publicados",
    value: "9",
    icon: Send,
  },
];

export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">
          Olá, Paulo 👋
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Gerencie seus conteúdos do LinkedIn.
        </p>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Card key={stat.title}>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-sm text-gray-500">
                    {stat.title}
                  </p>

                  <p className="mt-2 text-3xl font-semibold">
                    {stat.value}
                  </p>
                </div>

                <Icon className="text-gray-400" />
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-semibold">
                Próximos posts
              </h2>

              <p className="text-sm text-gray-500">
                Conteúdos programados para publicação.
              </p>
            </div>

            <Link
              href="/posts/new"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Novo post
            </Link>
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium">
                  Java + Spring Boot
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Amanhã às 09:00
                </p>
              </div>

              <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs text-yellow-700">
                Agendado
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}