/*
 * This file is generated by jOOQ.
 */
package org.jooq.codegen.maven.example;


import org.jooq.ForeignKey;
import org.jooq.TableField;
import org.jooq.UniqueKey;
import org.jooq.codegen.maven.example.tables.Employees;
import org.jooq.codegen.maven.example.tables.Tasks;
import org.jooq.codegen.maven.example.tables.records.EmployeesRecord;
import org.jooq.codegen.maven.example.tables.records.TasksRecord;
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

    public static final UniqueKey<EmployeesRecord> EMPLOYEES_PKEY = Internal.createUniqueKey(Employees.EMPLOYEES, DSL.name("employees_pkey"), new TableField[] { Employees.EMPLOYEES.ID }, true);
    public static final UniqueKey<TasksRecord> TASKS_PKEY = Internal.createUniqueKey(Tasks.TASKS, DSL.name("tasks_pkey"), new TableField[] { Tasks.TASKS.ID }, true);

    // -------------------------------------------------------------------------
    // FOREIGN KEY definitions
    // -------------------------------------------------------------------------

    public static final ForeignKey<TasksRecord, EmployeesRecord> TASKS__TASKS_EMPLOYEEID_FKEY = Internal.createForeignKey(Tasks.TASKS, DSL.name("tasks_employeeid_fkey"), new TableField[] { Tasks.TASKS.EMPLOYEEID }, Keys.EMPLOYEES_PKEY, new TableField[] { Employees.EMPLOYEES.ID }, true);
}
