/*
 * This file is generated by jOOQ.
 */
package org.jooq.codegen.maven.example.tables;


import org.jooq.Field;
import org.jooq.ForeignKey;
import org.jooq.Identity;
import org.jooq.Name;
import org.jooq.Record;
import org.jooq.Row2;
import org.jooq.Schema;
import org.jooq.Table;
import org.jooq.TableField;
import org.jooq.TableOptions;
import org.jooq.UniqueKey;
import org.jooq.codegen.maven.example.Keys;
import org.jooq.codegen.maven.example.Public;
import org.jooq.codegen.maven.example.tables.records.FilialsRecord;
import org.jooq.impl.DSL;
import org.jooq.impl.SQLDataType;
import org.jooq.impl.TableImpl;


/**
 * This class is generated by jOOQ.
 */
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class Filials extends TableImpl<FilialsRecord> {

    private static final long serialVersionUID = 1L;

    /**
     * The reference instance of <code>public.filials</code>
     */
    public static final Filials FILIALS = new Filials();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<FilialsRecord> getRecordType() {
        return FilialsRecord.class;
    }

    /**
     * The column <code>public.filials.id</code>.
     */
    public final TableField<FilialsRecord, Integer> ID = createField(DSL.name("id"), SQLDataType.INTEGER.nullable(false).identity(true), this, "");

    /**
     * The column <code>public.filials.name</code>.
     */
    public final TableField<FilialsRecord, String> NAME = createField(DSL.name("name"), SQLDataType.VARCHAR, this, "");

    private Filials(Name alias, Table<FilialsRecord> aliased) {
        this(alias, aliased, null);
    }

    private Filials(Name alias, Table<FilialsRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment(""), TableOptions.table());
    }

    /**
     * Create an aliased <code>public.filials</code> table reference
     */
    public Filials(String alias) {
        this(DSL.name(alias), FILIALS);
    }

    /**
     * Create an aliased <code>public.filials</code> table reference
     */
    public Filials(Name alias) {
        this(alias, FILIALS);
    }

    /**
     * Create a <code>public.filials</code> table reference
     */
    public Filials() {
        this(DSL.name("filials"), null);
    }

    public <O extends Record> Filials(Table<O> child, ForeignKey<O, FilialsRecord> key) {
        super(child, key, FILIALS);
    }

    @Override
    public Schema getSchema() {
        return aliased() ? null : Public.PUBLIC;
    }

    @Override
    public Identity<FilialsRecord, Integer> getIdentity() {
        return (Identity<FilialsRecord, Integer>) super.getIdentity();
    }

    @Override
    public UniqueKey<FilialsRecord> getPrimaryKey() {
        return Keys.FILIALS_PKEY;
    }

    @Override
    public Filials as(String alias) {
        return new Filials(DSL.name(alias), this);
    }

    @Override
    public Filials as(Name alias) {
        return new Filials(alias, this);
    }

    /**
     * Rename this table
     */
    @Override
    public Filials rename(String name) {
        return new Filials(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public Filials rename(Name name) {
        return new Filials(name, null);
    }

    // -------------------------------------------------------------------------
    // Row2 type methods
    // -------------------------------------------------------------------------

    @Override
    public Row2<Integer, String> fieldsRow() {
        return (Row2) super.fieldsRow();
    }
}
