/*
 * This file is generated by jOOQ.
 */
package com.jooq.db;


import com.jooq.db.tables.Databasechangeloglock;
import com.jooq.db.tables.Employees;
import com.jooq.db.tables.Tasks;
import com.jooq.db.tables.records.DatabasechangeloglockRecord;
import com.jooq.db.tables.records.EmployeesRecord;
import com.jooq.db.tables.records.TasksRecord;

import org.jooq.ForeignKey;
import org.jooq.TableField;
import org.jooq.UniqueKey;
import org.jooq.impl.DSL;
import org.jooq.impl.Internal;


/**
 * A class modelling foreign key relationships and constraints of tables in
 * public.
 */
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class Keys {

    // -------------------------------------------------------------------------
    // UNIQUE and PRIMARY KEY definitions
    // -------------------------------------------------------------------------

    public static final UniqueKey<DatabasechangeloglockRecord> DATABASECHANGELOGLOCK_PKEY = Internal.createUniqueKey(Databasechangeloglock.DATABASECHANGELOGLOCK, DSL.name("databasechangeloglock_pkey"), new TableField[] { Databasechangeloglock.DATABASECHANGELOGLOCK.ID }, true);
    public static final UniqueKey<EmployeesRecord> EMPLOYEES_PKEY = Internal.createUniqueKey(Employees.EMPLOYEES, DSL.name("employees_pkey"), new TableField[] { Employees.EMPLOYEES.ID }, true);
    public static final UniqueKey<TasksRecord> TASKS_PKEY = Internal.createUniqueKey(Tasks.TASKS, DSL.name("tasks_pkey"), new TableField[] { Tasks.TASKS.ID }, true);

    // -------------------------------------------------------------------------
    // FOREIGN KEY definitions
    // -------------------------------------------------------------------------

    public static final ForeignKey<EmployeesRecord, EmployeesRecord> EMPLOYEES__EMPLOYEES_CHIEFID_FKEY = Internal.createForeignKey(Employees.EMPLOYEES, DSL.name("employees_chiefid_fkey"), new TableField[] { Employees.EMPLOYEES.CHIEFID }, Keys.EMPLOYEES_PKEY, new TableField[] { Employees.EMPLOYEES.ID }, true);
    public static final ForeignKey<TasksRecord, EmployeesRecord> TASKS__TASKS_EMPLOYEEID_FKEY = Internal.createForeignKey(Tasks.TASKS, DSL.name("tasks_employeeid_fkey"), new TableField[] { Tasks.TASKS.EMPLOYEEID }, Keys.EMPLOYEES_PKEY, new TableField[] { Employees.EMPLOYEES.ID }, true);
}