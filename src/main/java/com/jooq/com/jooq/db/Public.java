/*
 * This file is generated by jOOQ.
 */
package com.jooq.db;


import com.jooq.db.tables.Databasechangeloglock;
import com.jooq.db.tables.Employees;
import com.jooq.db.tables.Tasks;

import java.util.Arrays;
import java.util.List;

import org.jooq.Catalog;
import org.jooq.Table;
import org.jooq.impl.SchemaImpl;


/**
 * This class is generated by jOOQ.
 */
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class Public extends SchemaImpl {

    private static final long serialVersionUID = 1L;

    /**
     * The reference instance of <code>public</code>
     */
    public static final Public PUBLIC = new Public();

    /**
     * The table <code>public.databasechangeloglock</code>.
     */
    public final Databasechangeloglock DATABASECHANGELOGLOCK = Databasechangeloglock.DATABASECHANGELOGLOCK;

    /**
     * The table <code>public.employees</code>.
     */
    public final Employees EMPLOYEES = Employees.EMPLOYEES;

    /**
     * The table <code>public.tasks</code>.
     */
    public final Tasks TASKS = Tasks.TASKS;

    /**
     * No further instances allowed
     */
    private Public() {
        super("public", null);
    }


    @Override
    public Catalog getCatalog() {
        return DefaultCatalog.DEFAULT_CATALOG;
    }

    @Override
    public final List<Table<?>> getTables() {
        return Arrays.asList(
            Databasechangeloglock.DATABASECHANGELOGLOCK,
            Employees.EMPLOYEES,
            Tasks.TASKS
        );
    }
}