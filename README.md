# Amity
Amity fosters inclusion at the workplace.

## System Requirements
Before proceeding, make sure you nave Node installed, along with the Node Package Manager.
To make sure you have Node correctly installed
<br>
```bash
node --version
```
and
<br>
```bash
npm -version
```
<br>
It's also required to have Neo4j, the graphical database engine, installed.
To download Neo4j, please navigate to https://neo4j.com/download/
Once you have Neo4j installed, proceed to step 1.

### 1. Start Neo4j, and configure the database

1. When you run Neo4j for the first time, you will be asked some questions about your intial configuration. Default settings are fine for our purposes.
2. Add a new graph. Give it the username
```bash
amity
```
and the password
```bash
amity!
```

### 2. Clone the Repository

Cloning via SSH
```bash
git clone git@github.com:natehood96/Amity_Api.git
```
Cloning via HTTP
<br>
```bash
git clone https://github.com/natehood96/Amity_Api.git
```
After cloning
```bash
cd Amity_Api
```

### 3. Install the required Node dependencies

```bash
npm install
```

### 4. Start the local development server

To start your development web server, use the command:
<br>
```bash
npm run dev
```

### 5. Connect to the web server

In your web browser, visit `localhost:3000/docs`
<br><br>
You should now see the swagger interface for interacting with the database!
<br>
