# Use the official Python image as the base image
FROM python:3.10-slim

# Upgrade pip
RUN pip install --upgrade pip

# Copy the requirements file and install dependencies
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# Copy the entire project into the /app directory
COPY . /app

# Set the working directory to /app
WORKDIR /app

# Copy the entrypoint script
COPY ./entrypoint.sh .

# Run collectstatic during the build process
RUN python manage.py collectstatic --noinput

# Specify the entrypoint script
ENTRYPOINT ["sh", "/app/entrypoint.sh"]
