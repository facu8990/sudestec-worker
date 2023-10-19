import { sqliteTable, integer, text, primaryKey, foreignKey, index, uniqueIndex } from 'drizzle-orm/sqlite-core';

// Define the Customers table
export const Customers = sqliteTable('Customers', {
  customer_id: text('customer_id').primaryKey(),
  first_name: text('first_name').notNull(),
  last_name: text('last_name').notNull(),
  email: text('email').unique().notNull(),
  phone_number: text('phone_number').notNull(),
  address: text('address').default('n/a'),
  identification: integer('identification').default(0),
}, (table) => {
  return {
    emailIndex: index('idx_customers_email').on(table.email),
  };
});

// Define the Devices table
export const Devices = sqliteTable('Devices', {
  device_id: integer('device_id').primaryKey(),
  customer_id: integer('customer_id').references(() => Customers.customer_id),
  device_name: text('device_name').default('n/a'),
  device_type: text('device_type').notNull(),
  serial_number: text('serial_number').unique().default('n/a'),
}, (table) => {
  return {
    serialNumberIndex: index('idx_devices_serial_number').on(table.serial_number),
  };
});

// Define the Preparation table
export const Preparation = sqliteTable('Preparation', {
  preparation_id: text('preparation_id').primaryKey(),
  client_ip: text('client_ip').notNull(),
  client_zone: text('client_zone').notNull(),
  agent: text('agent').notNull(),
}, (table) => {
  return {
    preparationIdIndex: index('idx_preparation_id').on(table.preparation_id),
  };
});

// Define the ServiceQuotes table
export const ServiceQuotes = sqliteTable('ServiceQuotes', {
  quote_id: integer('quote_id').primaryKey(),
  customer_id: integer('customer_id').references(() => Customers.customer_id),
  device_id: integer('device_id').references(() => Devices.device_id),
  quote_date: text('quote_date').default(null),
  description: text('description').default(null),
  estimated_cost: real('estimated_cost').check('estimated_cost >= 0').default(null),
  status: text('status').default(null),
}, (table) => {
  return {
    customerIndex: index('idx_servicequotes_customer_id').on(table.customer_id),
    deviceIndex: index('idx_servicequotes_device_id').on(table.device_id),
  };
});
