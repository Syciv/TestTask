/*
 * This file is generated by jOOQ.
 */
package org.jooq.codegen.maven.example;


import java.util.Arrays;
import java.util.List;

import org.jooq.Catalog;
import org.jooq.Table;
import org.jooq.codegen.maven.example.tables.Databasechangeloglock;
import org.jooq.codegen.maven.example.tables.Employees;
import org.jooq.codegen.maven.example.tables.Filials;
import org.jooq.codegen.maven.example.tables.Posts;
import org.jooq.codegen.maven.example.tables.Tasks;
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
     * The table <code>public.filials</code>.
     */
    public final Filials FILIALS = Filials.FILIALS;

    /**
     * The table <code>public.posts</code>.
     */
    public final Posts POSTS = Posts.POSTS;

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
            Filials.FILIALS,
            Posts.POSTS,
            Tasks.TASKS
        );
    }
}
