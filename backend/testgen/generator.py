from langchain.llms import Groq
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain

groq = Groq(
    api_key="your-groq-api-key",
    model="llama3-8b-8192"
)

prompt = PromptTemplate(
    input_variables=["user_story"],
    template="""
    Generate a detailed list of QA test cases for the following user story:
    "{user_story}"
    
    Format:
    1. Test case title
    2. Preconditions
    3. Steps
    4. Expected result
    """
)

llm_chain = LLMChain(llm=groq, prompt=prompt)

def generate_test_cases(story: str) -> str:
    result = llm_chain.run(user_story=story)
    return result
