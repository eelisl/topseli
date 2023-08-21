# Starting the PostgreSQL Docker Container
## Prerequisites
- Docker installed on your machine.
- Environment variables `DB_USER`, `DB_PASS`, and `DB_NAME` set, either in your shell or in an .env file in the same directory as your docker-compose.yml.

## Steps to Start
1. Navigate to the directory containing the docker-compose.yml file.
2. Run the following command to start the PostgreSQL container:
    ```bash
    docker-compose up -d
    ```
## Migrating Changes with Prisma
### Prerequisites
- Node.js and npm installed.
- Prisma CLI installed as a development dependency.
- PostgreSQL container running (as detailed above).
### Steps to Migrate
1. Create a New Migration:
- After making changes to the Prisma schema (schema.prisma), create a new migration:
  ```bash
  npx prisma migrate dev --name <migration-name>
  ```
  Replace <migration-name> with a descriptive name for the migration.

2. Apply the Migration:
- The above command will also apply the migration. If you want to apply existing migrations separately, you can use:

```bash
npx prisma migrate deploy
```
3. Generate Prisma Client:
- To generate or update the Prisma Client after migrating:

    ```bash
    npx prisma generate
    ```

4. Resetting the Database (Optional):
- If you need to reset the database and apply all migrations from scratch:
    ```bash
    npx prisma migrate reset
    ```

Please ensure you have the appropriate environment variables and connection strings set up, as detailed in the main project documentation.