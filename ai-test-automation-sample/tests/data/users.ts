export const users = {
  valid: { name: 'QA User', email: 'qa@example.com', password: 'Password123!' },
  admin: { name: 'Admin User', email: 'admin@example.com', password: 'Admin123!' },
  invalid: { name: 'Bad User', email: 'wrong@example.com', password: 'WrongPassword!' }
};

export const registrationData = [
  { name: 'Data User One', email: `data1-${Date.now()}@example.com`, password: 'Password123!' },
  { name: 'Data User Two', email: `data2-${Date.now()}@example.com`, password: 'Password123!' }
];
