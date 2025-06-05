## 🚀 Backend Setup

> Setup instructions for the backend located in `./backend`

---

### 📦 1. Install Dependencies

```bash
npm install
```

---

### 🗄️ 2. Create the Database

```bash
node config/createDatabase.js
```

---

### 🍱 3. Migrate Foodpanda Database

```bash
node config/run-migration db1
```

---

### 🛵 4. Migrate Grab Database

```bash
node config/run-migration db2
```

---

✅ After these steps, your backend should be fully set up and ready to use!