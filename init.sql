-- Initialize database for development
-- This file is used by Docker Compose to set up the initial database

-- Create the main database if using docker-compose
-- (This is optional as POSTGRES_DB environment variable handles this)

-- Grant permissions
GRANT ALL PRIVILEGES ON DATABASE fullstack_app TO postgres;

-- You can add initial seed data here if needed
-- Example:
-- INSERT INTO users (name, email, password) VALUES 
--   ('Admin User', 'admin@example.com', 'hashed_password_here');