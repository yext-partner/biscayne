import { 
  AnswersHeadlessProvider,
  SandboxEndpoints
 } from "@yext/answers-headless-react";
import * as React from "react";
import { useLoadStateFromURL } from "../../hooks";
import searchConfig from "../../search.config";

type Props = {
  verticalKey?: string;
  children?: React.ReactNode;
  headlessId?: string;
};

const SearchExperience = ({ verticalKey, children, headlessId }: Props) => {
  return (
    <AnswersHeadlessProvider
      {...searchConfig}
      verticalKey={verticalKey}
      endpoints={SandboxEndpoints}
      headlessId={headlessId}
    >
      <StateManager>{children}</StateManager>
    </AnswersHeadlessProvider>
  );
};

const StateManager = ({ children }: { children: React.ReactNode }) => {
  useLoadStateFromURL();

  return <>{children}</>;
};

export default SearchExperience;
