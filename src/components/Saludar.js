import { View, Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
  const { name, lastName } = props;
  return (
    <View>
      <Text>Hola {name} {lastName}</Text>
    </View>
  );
}

Saludar.defaultProps = {
  name: "Giorgio",
  // lastName: "DaVinci"
}

Saludar.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string
}