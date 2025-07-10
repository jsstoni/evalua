import {
  Brain,
  CircleCheckBig,
  Download,
  Printer
} from 'lucide-react';

export default function Home() {
  return (
    <main>
      <section className="py-8">
        <div className="container grid grid-cols-2 gap-8">
          <div className="space-y-4 rounded-lg border bg-card p-4 hover:drop-shadow-sm">
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

            <div>
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
    </main>
  );
}
