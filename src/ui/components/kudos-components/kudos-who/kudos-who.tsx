import { Avatar, Form, Image } from "antd";
import _ from "lodash";
import { SelectOptionProps } from "../../../containers";
import { StyledSelect } from "../kudos-style";
import { RootState } from "../../../../redux";
import { useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";

interface KudosWhoProps {
  options: SelectOptionProps[];
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export function KudosWho({ options, setEmail }: KudosWhoProps) {
  const inputSearchEmail = _.debounce((value: string) => {
    setEmail(value);
  }, 500);

  const isLoading = useSelector(
    (state: RootState) => state.user.listUsersStatus,
  );

  return (
    <Form.Item
      name={["kudos", "receiverId"]}
      label="Who is it?"
      rules={[{ required: true, message: "Please choose a receiver!" }]}
    >
      <StyledSelect
        dropdownStyle={{
          maxHeight: 300,
          width: 400,
          overflow: "auto",
          position: "fixed",
        }}
        showSearch
        placeholder="Who do you want to?"
        options={options}
        optionRender={(option) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {option.data.image ? (
              <Image src={option.data.image} preview={false} width={30} />
            ) : (
              <Avatar icon={<UserOutlined />} />
            )}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 10,
              }}
            >
              <span>{option.data.label}</span>
              <span>{option.data.email}</span>
            </div>
          </div>
        )}
        loading={isLoading === "PENDING"}
        onSearch={inputSearchEmail}
        filterOption={false}
        notFoundContent="No person found"
      />
    </Form.Item>
  );
}
