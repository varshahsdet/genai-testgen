from fastapi import FastAPI, Request
from pydantic import BaseModel
from testgen.generator import generate_test_cases

app = FastAPI()

class UserStory(BaseModel):
    user_story: str

@app.post("/generate-test-cases")
async def generate(user_story: UserStory):
    cases = generate_test_cases(user_story.user_story)
    return {"test_cases": cases}
