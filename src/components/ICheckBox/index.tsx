import { FC, memo, useState } from "react";
import classnames from "classnames";
import { View } from "@tarojs/components";
import "./index.scss";

type Props = {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
};

const ICheckBox: FC<Props> = ({ checked, label, onChange }) => {
  const [selected, setSelected] = useState(checked);

  const cls = classnames({
    check_box: true,
    checked: selected,
    check: !selected,
  });
  return (
    <View
      className="checkbox_components"
      onClick={() => {
        setSelected(!selected);
        onChange(!selected);
      }}
    >
      <View className="label">{label}</View>
      <View className={cls}></View>
    </View>
  );
};
export default memo(ICheckBox, (oldProps, newProps) => {
  return oldProps.checked === newProps.checked;
});