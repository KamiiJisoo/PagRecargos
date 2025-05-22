import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Control de Horas Extras',
  description: 'Sistema de control de horas extras para bomberos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[var(--background)] flex flex-col">
        {/* Header fijo */}
        <header className="bg-[var(--primary)] text-white py-4 shadow-md sticky top-0 z-50">
          <div className="container mx-auto flex items-center justify-between px-2 md:px-0">
            <div className="flex items-center gap-3">
              <div className="flex flex-col md:flex-row items-center bg-white rounded-lg px-4 py-2" style={{height: 'auto'}}>
                <img src="/LogoFinal.png" alt="Logo Bomberos" className="h-20 w-auto object-contain md:mr-4 mb-2 md:mb-0" />
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-lg font-bold text-gray-800 mt-2 md:mt-0 text-center md:text-left">
                    Cálculo de recargos y Horas Extras
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              
            </div>
          </div>
        </header>
        {/* Contenido principal */}
        <main className="flex-1 container mx-auto w-full px-2 md:px-0">
          {children}
        </main>
        {/* Footer institucional */}
        <footer className="bg-gray-200 text-center py-4 mt-8 text-gray-600 text-sm">
          © 2025 U.A.E CUERPO OFICIAL DE BOMBEROS BOGOTA D.C. - Cálculo recargos y Horas Extras
        </footer>
      </body>
    </html>
  )
}
