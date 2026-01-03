
FROM python:3.10-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt || true  # safe if requirements.txt is empty
COPY . .
EXPOSE 8000
CMD ["python", "app.py"]
