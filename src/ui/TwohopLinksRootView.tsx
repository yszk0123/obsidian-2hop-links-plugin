import { TwohopLink } from "../model/TwohopLink";

import React from "react";
import { FileEntity } from "../model/FileEntity";
import TwohopLinksView from "./TwohopLinksView";
import ConnectedLinksView from "./ConnectedLinksView";
import NewLinksView from "./NewLinksView";
import { TagLinks } from "../model/TagLinks";
import TagLinksListView from "./TagLinksListView";

interface TwohopLinksRootViewProps {
  connectedLinks: FileEntity[];
  newLinks: FileEntity[];
  resolvedTwoHopLinks: TwohopLink[];
  unresolvedTwoHopLinks: TwohopLink[];
  tagLinksList: TagLinks[];
  onClick: (fileEntity: FileEntity) => Promise<void>;
  getPreview: (fileEntity: FileEntity) => Promise<string>;
  boxWidth: string;
  boxHeight: string;
}

export default class TwohopLinksRootView extends React.Component<TwohopLinksRootViewProps> {
  constructor(props: TwohopLinksRootViewProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div>
        <ConnectedLinksView
          fileEntities={this.props.connectedLinks}
          onClick={this.props.onClick}
          getPreview={this.props.getPreview}
          boxWidth={this.props.boxWidth}
          boxHeight={this.props.boxHeight}
        />
        <TwohopLinksView
          twoHopLinks={this.props.unresolvedTwoHopLinks}
          resolved={false}
          onClick={this.props.onClick}
          getPreview={this.props.getPreview}
          boxWidth={this.props.boxWidth}
          boxHeight={this.props.boxHeight}
        />
        <TwohopLinksView
          twoHopLinks={this.props.resolvedTwoHopLinks}
          resolved={true}
          onClick={this.props.onClick}
          getPreview={this.props.getPreview}
          boxWidth={this.props.boxWidth}
          boxHeight={this.props.boxHeight}
        />
        <NewLinksView
          fileEntities={this.props.newLinks}
          onClick={this.props.onClick}
          getPreview={this.props.getPreview}
          boxWidth={this.props.boxWidth}
          boxHeight={this.props.boxHeight}
        />
        <TagLinksListView
          tagLinksList={this.props.tagLinksList}
          onClick={this.props.onClick}
          getPreview={this.props.getPreview}
          boxWidth={this.props.boxWidth}
          boxHeight={this.props.boxHeight}
        />
      </div>
    );
  }
}
