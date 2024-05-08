import { StyledText, Select, KudosWhoWrapper } from "../kudos-style";
import type { SelectProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

export function KudosWho() {
  const options: SelectProps["options"] = [
    {
      label: "Nhat Nguyen",
      value: "1",
      email: "nhat.nguyen@zoi.tech",
      image: <Avatar icon={<UserOutlined />} />,
    },
    {
      label: "Khoa Nguyen",
      value: "2",
      email: "khoa.nguyenanh@zoi.tech",
      image: <Avatar icon={<UserOutlined />} />,
    },
    {
      label: "Leonardo Mitsui",
      value: "3",
      email: "leonardo.mitsui@zoi.tech",
      image: <Avatar icon={<UserOutlined />} />,
    },
    {
      label: "Anh Dinh",
      value: "4",
      email: "anh.dinh@zoi.tech",
      image: <Avatar icon={<UserOutlined />} />,
    },
    {
      label: "Tan Nguyen",
      value: "5",
      email: "tan.nguyen@zoi.tech",
      image: <Avatar icon={<UserOutlined />} />,
    },
    {
      label: "Daynet Olmos Graterol",
      value: "6",
      email: "daynet.olmos@zoi.tech",
      image: <Avatar icon={<UserOutlined />} />,
    },
    {
      label: "Jose Colmenares",
      value: "7",
      email: "josealejandro.colmenares@zoi.tech",
      image: <Avatar icon={<UserOutlined />} />,
    },
  ];

  return (
    <KudosWhoWrapper>
      <StyledText>
        Who is it? <StyledText type="danger">*</StyledText>
      </StyledText>
      <Select
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
            {option.data.image}
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
        filterOption={(input, option) =>
          (typeof option?.label === "string" &&
            option?.label?.toLowerCase().indexOf(input.toLowerCase()) >= 0) ||
          (typeof option?.value === "string" &&
            option?.value?.toLowerCase().indexOf(input.toLowerCase()) >= 0)
        }
        notFoundContent="No person found"
      />
    </KudosWhoWrapper>
  );
}
