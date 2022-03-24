import react,{component} from "react";
import{font:7} from "expo-google-fonts/font";
import * as font from "expo-font";

import BottomTabNavigator from "./components/BottomTabNavigator";

export default class app extends component{
    constructor(){
        super();
        this.state = {
            fontLoaded : false
        };
    }
  async loadFont(){
      await font.loadAsync({
          font:font
      });
      this.setState({fontloaded:true});
  }
  componentDidMount(){
      this.loadFont();
  }
}