// @ts-ignore
import React, { Component } from "react";
// @ts-ignore
import Select from "react-select";

interface IProps {
  files: any;
  changeFile: (val: any) => void;
}
interface IOpt {
  value: string;
  label: string;
}
interface IState {
  selectedOption: any;
  options: IOpt[];
}

const customStyles = {
  control: (base: any, state: any) => ({
    ...base,
    backgroundColor: "#000",
    color: "#fff",
    menu: "20px",
    borderColor: '#38ffAf'
  }),

  menu: (base: any) => ({
    ...base,
    color: "#fff",
    background: "#000"
  }),
  menuList: (base: any) => ({
    ...base,
    color: "#fff",
    background: "#000"
  }),
  singleValue: (base: any) => ({
    ...base,
    color: "#fff"
  }),
  option: (base: any, { isFocused }: any) => ({
    ...base,
    color: "#fff",
    backgroundColor: isFocused ? "#aaa" : null
  })
};

class Dropdown extends Component<IProps, IState> {
  public state = {
    selectedOption: null,
    options: new Array<IOpt>()
  };
  constructor(props: IProps) {
    super(props);
    const { options } = this.state;
    props.files.map((file: string) => {
      const optItm: IOpt = {
        value: file,
        label: file.substring(file.lastIndexOf('/') + 1)
      };
      return options.push(optItm);
    });
  }
  public componentWillUnmount() {
    this.setState({ selectedOption: null, options: [] });
  }
  public handleChange = (selectedOption: any) => {
    this.setState({ selectedOption });
    this.props.changeFile(selectedOption);
  };
  public render() {
    const { selectedOption, options } = this.state;
    return (
      <div style={{ marginBottom: '30px' }}>
        <Select
          placeholder="Select Files"
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          className="select-width"
          styles={customStyles}
        />
      </div>
    );
  }
}
export default Dropdown;