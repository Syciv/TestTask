import { createUseStyles } from "react-jss";

const button = {
  border: 0,
  borderRadius: 7,
  color: "white",
  fontWeight: 500,
  margin: 5,
  padding: 5,
  textDecoration: 'none',
  "&:hover": {
      backgroundColor: "#162EAE"
  }
}

const useStyles = createUseStyles({
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
    border:  '1px solid #eeeeee',
  },

  cont: {
    margin: 15,
    textAlign: 'left',
  }

});



export default useStyles;
