import streamDeck, { LogLevel } from "@elgato/streamdeck";

import { Brightness, Color, ColorTemperature, LightScene, TurnOnOff } from "./actions/";

streamDeck.logger.setLevel(LogLevel.TRACE);

// Register the actions and connect to Stream Deck.
streamDeck.actions.registerAction(new Brightness());
streamDeck.actions.registerAction(new Color());
streamDeck.actions.registerAction(new ColorTemperature());
streamDeck.actions.registerAction(new TurnOnOff());
streamDeck.actions.registerAction(new LightScene());
streamDeck.connect();
