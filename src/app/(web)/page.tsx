import { Brain, CircleCheckBig, Download, Printer } from 'lucide-react';

const points = [
  {
    title: 'SUBIR CONTENIDO',
    description: 'Añade tu contenido y deja que la IA los analice',
  },
  {
    title: 'GENERAR PREGUNTAS',
    description: 'La IA crea preguntas de evaluación relevantes',
  },
  {
    title: 'IMPRIMIR Y USAR',
    description: 'Exportar a PDF o imprimir para el aula',
  },
];

export default function Home() {
  return (
    <>
      <div className="container border-x">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 py-14 text-center">
          <span className="inline-flex rounded-full border-2 px-4 py-0.5 text-xs uppercase">
            Open Source
          </span>
          <h1 className="font-black text-7xl">
            Genera Preguntas Inteligentes en Segundos
          </h1>
        </div>
      </div>
      <section className="border-t">
        <div className="container grid grid-cols-3 gap-px border-plus border-x bg-border">
          {points.map((point) => (
            <div className="bg-background p-8" key={point.title}>
              <strong>{point.title}</strong>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="border-t">
        <div className="container grid grid-cols-2 gap-8 border-plus border-x p-8">
          <div className="flex flex-col gap-4 rounded-lg border bg-card p-4 hover:drop-shadow-sm">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-accent p-3">
                <Brain />
              </div>
              <div>
                <span className="text-sm">FUNCIÓN PRINCIPAL</span>
                <h3 className="font-bold text-xl">
                  Generación de preguntas inteligentes
                </h3>
              </div>
            </div>
            <p className="leading-relaxed">
              La IA analiza tu contenido educativo y genera preguntas
              contextualmente relevantes. Ideal para crear evaluaciones,
              cuestionarios y materiales de práctica.
            </p>

            <div className="mt-auto">
              <div className="border-2 border-dashed p-4">
                TIPOS DE PREGUNTAS
              </div>
              <div className="grid grid-cols-2 gap-4 border-2 border-t-0 border-dashed p-3">
                {['OPCIÓN MÚLTIPLE', 'VERDADERO/FALSO', 'ENSAYO'].map(
                  (option) => (
                    <div className="flex items-center gap-2" key={option}>
                      <CircleCheckBig /> {option}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4 rounded-lg border bg-card p-4 hover:drop-shadow-sm">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-accent p-3">
                  <Download />
                </div>

                <div>
                  <span className="ml-auto text-sm">EXPORTAR</span>
                  <h3 className="font-bold text-xl">Opciones de exportación</h3>
                </div>
              </div>
              <p className=" leading-relaxed">
                Descargue sus preguntas generadas en múltiples formatos para
                facilitar su distribución e impresión.
              </p>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-md border bg-accent p-2">
                  PDF
                  <span className="block text-sm">FORMATEADO</span>
                </div>
                <div className="rounded-md border bg-accent p-2">
                  DOCX
                  <span className="block text-sm">EDITABLE</span>
                </div>
                <div className="rounded-md border bg-accent p-2">
                  TXT
                  <span className="block text-sm">PLANO</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 rounded-lg border bg-card p-4 hover:drop-shadow-sm">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-accent p-3">
                  <Printer />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Listo para imprimir</h3>
                  <span className="ml-auto text-sm">IMPRIMIR</span>
                </div>
              </div>
              <p className=" leading-relaxed">
                Las preguntas están formateadas profesionalmente para tamaños de
                papel estándar, con márgenes y espaciado adecuados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
