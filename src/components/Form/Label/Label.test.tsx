import { render } from "@testing-library/react";
import Label from "./index";

describe("Label", () => {
  it("renders the label text", () => {
    const labelText = "Name";
    const { getByText } = render(<Label id="name">{labelText}</Label>);

    expect(getByText(labelText)).toBeInTheDocument();
  });

  it("shows the '(optional)' text when the 'optional' prop is true", () => {
    const labelText = "Phone Number";
    const { getByText } = render(
      <Label id="phone" optional>
        {labelText}
      </Label>,
    );
    expect(getByText("(optional)")).toBeInTheDocument();
  });
});
