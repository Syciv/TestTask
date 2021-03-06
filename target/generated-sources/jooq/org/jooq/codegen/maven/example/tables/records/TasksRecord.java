/*
 * This file is generated by jOOQ.
 */
package org.jooq.codegen.maven.example.tables.records;


import org.jooq.Field;
import org.jooq.Record1;
import org.jooq.Record4;
import org.jooq.Row4;
import org.jooq.codegen.maven.example.tables.Tasks;
import org.jooq.impl.UpdatableRecordImpl;


/**
 * This class is generated by jOOQ.
 */
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TasksRecord extends UpdatableRecordImpl<TasksRecord> implements Record4<Integer, Integer, String, Integer> {

    private static final long serialVersionUID = 1L;

    /**
     * Setter for <code>public.tasks.id</code>.
     */
    public void setId(Integer value) {
        set(0, value);
    }

    /**
     * Getter for <code>public.tasks.id</code>.
     */
    public Integer getId() {
        return (Integer) get(0);
    }

    /**
     * Setter for <code>public.tasks.priority</code>.
     */
    public void setPriority(Integer value) {
        set(1, value);
    }

    /**
     * Getter for <code>public.tasks.priority</code>.
     */
    public Integer getPriority() {
        return (Integer) get(1);
    }

    /**
     * Setter for <code>public.tasks.description</code>.
     */
    public void setDescription(String value) {
        set(2, value);
    }

    /**
     * Getter for <code>public.tasks.description</code>.
     */
    public String getDescription() {
        return (String) get(2);
    }

    /**
     * Setter for <code>public.tasks.employeeid</code>.
     */
    public void setEmployeeid(Integer value) {
        set(3, value);
    }

    /**
     * Getter for <code>public.tasks.employeeid</code>.
     */
    public Integer getEmployeeid() {
        return (Integer) get(3);
    }

    // -------------------------------------------------------------------------
    // Primary key information
    // -------------------------------------------------------------------------

    @Override
    public Record1<Integer> key() {
        return (Record1) super.key();
    }

    // -------------------------------------------------------------------------
    // Record4 type implementation
    // -------------------------------------------------------------------------

    @Override
    public Row4<Integer, Integer, String, Integer> fieldsRow() {
        return (Row4) super.fieldsRow();
    }

    @Override
    public Row4<Integer, Integer, String, Integer> valuesRow() {
        return (Row4) super.valuesRow();
    }

    @Override
    public Field<Integer> field1() {
        return Tasks.TASKS.ID;
    }

    @Override
    public Field<Integer> field2() {
        return Tasks.TASKS.PRIORITY;
    }

    @Override
    public Field<String> field3() {
        return Tasks.TASKS.DESCRIPTION;
    }

    @Override
    public Field<Integer> field4() {
        return Tasks.TASKS.EMPLOYEEID;
    }

    @Override
    public Integer component1() {
        return getId();
    }

    @Override
    public Integer component2() {
        return getPriority();
    }

    @Override
    public String component3() {
        return getDescription();
    }

    @Override
    public Integer component4() {
        return getEmployeeid();
    }

    @Override
    public Integer value1() {
        return getId();
    }

    @Override
    public Integer value2() {
        return getPriority();
    }

    @Override
    public String value3() {
        return getDescription();
    }

    @Override
    public Integer value4() {
        return getEmployeeid();
    }

    @Override
    public TasksRecord value1(Integer value) {
        setId(value);
        return this;
    }

    @Override
    public TasksRecord value2(Integer value) {
        setPriority(value);
        return this;
    }

    @Override
    public TasksRecord value3(String value) {
        setDescription(value);
        return this;
    }

    @Override
    public TasksRecord value4(Integer value) {
        setEmployeeid(value);
        return this;
    }

    @Override
    public TasksRecord values(Integer value1, Integer value2, String value3, Integer value4) {
        value1(value1);
        value2(value2);
        value3(value3);
        value4(value4);
        return this;
    }

    // -------------------------------------------------------------------------
    // Constructors
    // -------------------------------------------------------------------------

    /**
     * Create a detached TasksRecord
     */
    public TasksRecord() {
        super(Tasks.TASKS);
    }

    /**
     * Create a detached, initialised TasksRecord
     */
    public TasksRecord(Integer id, Integer priority, String description, Integer employeeid) {
        super(Tasks.TASKS);

        setId(id);
        setPriority(priority);
        setDescription(description);
        setEmployeeid(employeeid);
    }
}
