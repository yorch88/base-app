from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime

class Users(BaseModel):
    name: str
    email: EmailStr
    

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str


class UserDB(BaseModel):
    id: str
    name: str
    email: EmailStr
    password_hash: str
