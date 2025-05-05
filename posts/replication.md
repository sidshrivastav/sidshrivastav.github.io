---
title: "Replication's Notes"
date: 2025-05-03
tags: article
layout: home.njk
---


# 🧬 Replication's Notes 

Replication, in general, means keeping copies of data on multiple machines that are connected via a network. Why do we need replication in our system?

### ✅ Benefits of Replication
- **Reduced access latency**: Keep replicas geographically close to the user for faster access.
- **Increased availability**: If one replica goes down, others are available to serve requests.
- **Improved read throughput**: Multiple machines can serve read traffic concurrently.

---

## 🔄 Synchronous and Asynchronous Replication

### 🔁 **Synchronous Replication**
- The **leader node waits** for an acknowledgment from the follower node before confirming a write.
- Ensures that data is **up to date** across replicas.
- **Drawback**: If any follower is slow or unresponsive, it can **delay writes** and slow down the system.

👉 *In practice*: One follower is often used for acknowledgment (semi-synchronous), while others update asynchronously.

### ⚡ **Asynchronous Replication**
- The **leader does not wait** for followers to acknowledge the write.
- Offers **faster writes**, but there's a **durability risk** if followers lag or fail.
- Provides **eventual consistency**, as opposed to the **strong consistency** of synchronous replication.

---

## 📚 Replication Log

Replication works through a replication log. There are several methods:

### 1. **Statement-based Replication**
- Sends all `INSERT`, `UPDATE`, and `DELETE` statements from leader to followers.
- Followers re-execute these statements.

- **Disadvantages:**
    - Non-deterministic functions like `NOW()` may create different results.
    - Auto-increment primary keys can limit concurrent transactions.
    - Statements with side effects (e.g., triggers, stored procedures) can behave differently across replicas.

---

### 2. **Write-Ahead Log (WAL) Shipping**
- Low-level data logs are appended and shipped to followers.
- Followers replay logs to recreate the data exactly.

**Drawback**: Not portable across different storage engines. Switching engines often requires **downtime**.

---

### 3. **Logical (Row-Based) Replication**
- Logs contain **row-level data** for `INSERT`, `UPDATE`, and `DELETE` (e.g., primary key for delete).
- Decoupled from storage engine, enabling integration with external systems.

🎯 *Used for*: **Change Data Capture (CDC)** systems.

---

### 4. **Trigger-Based Replication**
- Replication is handled at the **application layer** using database triggers.

- **Pros**:
    - High flexibility.

- **Cons**:
    - Higher overhead.
    - Prone to bugs and limitations compared to built-in replication methods.

---

## 🕒 Replication Lag

Replication lag is a challenge in **eventually consistent** systems. Here are some strategies to deal with it:

### 🧠 Read Your Own Writes
- After a write, read from the **leader** for a short period before switching to followers.
- Useful when data is changed by a **single source** (e.g., a user's profile page).

### 🔁 Monotonic Reads
- Prevent reading stale data from different replicas.
- Enforce that a user always reads from the **same follower** (e.g., based on hash of user ID).

### ⏳ Consistent Prefix Reads
- Ensure writes are **applied in order** on follower nodes.
- Prevent users from seeing out-of-order or partial updates.
