from fastapi import FastAPI
from .core.events import register_startup, register_shutdown
from .modules.users.routes import router as users_router



app = FastAPI(title="Support FJZ Modular API", version="0.1.0")

# 👇 sin middleware de planta por ahora
# from .core.middleware import PlantGuardMiddleware
# app.add_middleware(PlantGuardMiddleware)

app.include_router(users_router, prefix="/auth", tags=["Auth"])

register_startup(app)
register_shutdown(app)
 