-- Create the Customers table

CREATE TABLE
    Customers (
        customer_id TEXT PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        phone_number TEXT NOT NULL,
        address TEXT NULL,
        identification INTEGER NULL
    );

CREATE INDEX idx_customers_email ON Customers (email);

CREATE TABLE
    Devices (
        device_id INTEGER PRIMARY KEY,
        customer_id INTEGER,
        device_name TEXT NULL,
        device_type TEXT NOT NULL,
        serial_number TEXT UNIQUE NULL,
        FOREIGN KEY (customer_id) REFERENCES Customers (customer_id)
    );

CREATE INDEX idx_devices_serial_number ON Devices (serial_number);

CREATE TABLE
    ServiceQuotes (
        quote_id INTEGER PRIMARY KEY,
        customer_id INTEGER NULL,
        device_id INTEGER NULL,
        quote_date DATE NULL,
        description TEXT NULL,
        estimated_cost DECIMAL(10, 2) NULL CHECK (estimated_cost >= 0),
        status TEXT NULL,
        FOREIGN KEY (customer_id) REFERENCES Customers (customer_id),
        FOREIGN KEY (device_id) REFERENCES Devices (device_id)
    );

CREATE INDEX
    idx_servicequotes_customer_id ON ServiceQuotes (customer_id);

CREATE INDEX
    idx_servicequotes_device_id ON ServiceQuotes (device_id);