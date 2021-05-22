import { App, PluginSettingTab, Setting } from "obsidian";
import TwohopLinksPlugin from "./main";

export interface TwohopPluginSettings {
  putOnTop: boolean;
  boxWidth: string;
  boxHeight: string;
  excludePattern: string;
  showTagLinks: boolean;
}

export const DEFAULT_SETTINGS: TwohopPluginSettings = {
  putOnTop: false,
  boxWidth: "162px",
  boxHeight: "178px",
  excludePattern: "",
  showTagLinks: true,
};

export class TwohopSettingTab extends PluginSettingTab {
  plugin: TwohopLinksPlugin;

  constructor(app: App, plugin: TwohopLinksPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const containerEl = this.containerEl;

    containerEl.empty();

    new Setting(containerEl)
      .setName("Box Width")
      .setDesc("Width of the boxes")
      .addText((text) =>
        text
          .setPlaceholder(DEFAULT_SETTINGS.boxWidth)
          .setValue(this.plugin.settings.boxWidth)
          .onChange(async (value) => {
            this.plugin.settings.boxWidth = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("Box Height")
      .setDesc("Height of the boxes")
      .addText((text) =>
        text
          .setPlaceholder(DEFAULT_SETTINGS.boxHeight)
          .setValue(this.plugin.settings.boxHeight)
          .onChange(async (value) => {
            this.plugin.settings.boxHeight = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("Put 2hop links to top of the pane(Experimental).")
      .setDesc(
        "Known bugs: This configuration doesn't work with the 'Embedded Note Titles' plugin."
      )
      .addToggle((toggle) => {
        toggle
          .setValue(this.plugin.settings.putOnTop)
          .onChange(async (value) => {
            this.plugin.settings.putOnTop = value;
            await this.plugin.saveSettings();
          });
      });

    new Setting(containerEl)
      .setName("Exclude Pattern")
      .setDesc("Pages to exclude")
      .addText((text) =>
        text
          .setPlaceholder(DEFAULT_SETTINGS.excludePattern)
          .setValue(this.plugin.settings.excludePattern)
          .onChange(async (value) => {
            this.plugin.settings.excludePattern = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("Show Tag Links")
      .setDesc("Show tag links")
      .addToggle((toggle) => {
        toggle
          .setValue(this.plugin.settings.showTagLinks)
          .onChange(async (value) => {
            this.plugin.settings.showTagLinks = value;
            await this.plugin.saveSettings();
          });
        toggle.setValue;
      });
  }
}
