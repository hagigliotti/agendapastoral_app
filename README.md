# 📅 Agenda Pastoral APP - MVP (GitHub Pages)

Proyecto estático para **GitHub Pages** (Fase 1). Sin backend ni base de datos.

## 📦 Estructura del Proyecto

```
agendapastoral_app/
├── .github/
│   └── workflows/
│       └── deploy.yml     # Auto-deploy a GitHub Pages
├── assets/
│   ├── logo.svg           ✅ Logo vectorial (100x100)
│   ├── account-avatar.svg ✅ Avatar usuario (64x64)
│   └── reorder-icon.svg   ✅ Icono reordenar (24x24)
├── css/
│   └── styles.css         ✅ Estilos de la app
├── html/
│   └── index.html         ✅ Página principal (MVP)
└── js/
    └── app.js             ✅ Lógica de la app (v1.0)
```

## 🚀 Instalación Local

```bash
# Abrir index.html directamente en navegador
open html/index.html
```

## 📤 Despliegue a GitHub Pages

### Opción A: Manual (Recomendada para MVP)

1. **Subir al repositorio de GitHub**
   - Crea un nuevo repo en GitHub llamado `agendapastoral-app`
   
2. **Comprimir el proyecto**
   ```bash
   # En PowerShell o terminal:
   Compress-Archive -Path .\agendapastoral_app\* -DestinationPath "agendapastoral-app.zip"
   ```

3. **Subir a GitHub**
   - Arrastra `agendapastoral-app.zip` al repositorio en GitHub
   
4. **Activar GitHub Pages**
   - Ve a: Settings → Pages → Customize
   - Fuente: `/ (raíz)` o `/html` según prefieras
   
5. **¡Listo!** Tu app estará disponible en:
   ```
   https://<tu-usuario>.github.io/agendapastoral-app/
   ```

### Opción B: Git automático

```bash
cd agendapastoral_app
git init
git add .
git commit -m "MVP: Agenda Pastoral para GitHub Pages"
git branch -M main
git remote add origin <URL-de-tu-repo-en-GitHub>
git push -u origin main
```

Luego en GitHub: Settings → Pages → Source → Deploy from a branch → main / (raíz)

## 🎨 Recursos y Assets

- **Logo**: `assets/logo.svg` (vectorial, escalable)
- **Avatar**: `assets/account-avatar.svg`
- **Icono reordenar**: `assets/reorder-icon.svg`

## 🔮 Plan de Versiones

| Versión | Características | Estado |
|---------|------------------|--------|
| **v1.0** | MVP estático para GitHub Pages | ✅ **ACTUAL** |
| **v2.0** | Supabase + autenticación | ⏳ Fase 2 |
| **v3.0** | CRUD eventos y usuarios | 📅 Futuro |

## 📞 Contacto

Para consultas o soporte: `tecnico16`

---

*Proyecto desarrollado para Agenda Pastoral - Gestión de Eventos y Asignaturas*
