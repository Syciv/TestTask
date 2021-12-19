import { createUseStyles } from "react-jss";

const def = {
  border: 0,
  color: "white",
  fontWeight: 500,
  textDecoration: 'none',
  transition: '0.3s',
  fontFamily: 'Segoe UI',
  "&:hover": {
      backgroundColor: "#8183CD"
  }
}

const button = {
  ...def,
  border: 0,
  borderRadius: 4,
  margin: 4,
  cursor: 'pointer',
  fontSize:15,
  padding: 7
}

const tab = {
  ...def,
  width: '10%',
  fontSize: 15,
  padding: 5
}

const useStyles = createUseStyles({
  tab_nonactive: {
    ...tab,
    backgroundColor:  "#9596CD"
  },

  tab_active: {
    ...tab,
    backgroundColor:  "#4e4f9b"
  },

  button_com: {
    ...button,
    backgroundColor:  "#4e4f9b"
  },

  button_delete: {
    ...button,
    backgroundColor: "#4d7499"
  },

  label: {
    fontSize: 20,
    fontWeight: 500,
  },

  input: {
    borderRadius: 4,
    padding: 5,
    fontSize:20,
    boxSizing: 'border-box',
    margin: 8,
    width: '20%'
  },

  table: {
    width:'100%',
    textAlign: 'center',
    fontSize: 15,
    border: '1px solid #eeeeee',
    borderSpacing: '0px 15px',
	  borderCollapse: 'collapse'
  },

  t_head:{
    fontWeight: 500,
	  padding: 5,
    height: 40,
	  background: '#efefef',
	  border: '1px solid #eeeeee',
    cursor: 'pointer'
  },

  t_row: {
    height: 40,
    border: '1px solid #eeeeee',
  },

  cont: {
    margin: 15,
    textAlign: 'left',
  },

  bottomborder: {
    borderBottomWidth: 3,
    borderBottomStyle: 'solid',
    borderBottomColor: '#4e4f9b'
  },

  scroll_table: {
    overflowY: 'auto',
    maxHeight:'700px',
    width: '100%'
  }
});

export default useStyles;
