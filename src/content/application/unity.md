---
layout: ../../layouts/theme/application.astro
title: Unity
category: Application
client: Self
publishDate: 2022-08-24 00:00:00
img: https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?fit=crop&w=1400&h=700&q=75
repo: https://github.com/traefik/traefik
description: A 3D Game and App Engine to build cross platform software.
tags:
- gaming
- engine
---

## Unity

- Unity is a cross-platform software engine that focuses on developing games, apps and animation for desktop, mobile, console and virtual reality platforms.
- The primary scripting language for the engine is `C#` and can be extended through a various collection of libraries and plugins.

## Header

- Right click and create empty
- Name it below : (Replace HeaderName with the name you would want)

```shell
---> HeaderName
```

* * *

## WebGL

A breakdown of WebGL for the Unity game engine!

### WebGL Information

When converting a project over to WebGL, there are a couple extremely important steps that you might have to take to prepare for an automated pipeline and distribution.

The most important step is to make sure that you have the HTML5/WebGL module for the specific Unity version installed and ready.

After that check the resolution, an example would be 800 x 600 but you can set it to your project's desired scope.

Next you want to make sure to check the box, `Run in background`, and save it. This should change the `runInBackground` inside of `ProjectSettings\ProjectSettings.asset` from 0 (false) to 1 (true).

Finally double check that you have the right compression methods enabled or in some cases, like Github Pages, disabled completely.

* * *

## Vuplex

This is a 3rd party plugin provider for Unity, that extends out the webview components for cross-platform compatibility through their own object-based library.

### Vuplex Errors

These are reference points for common errors within the Vuplex libraries / eco-system.

#### Heavy CPU Usage

Loading multiple webview components within a single scene can cause a spike within the client's CPU/RAM, thus it is recommended to de-sync / destroy or de-activate any un-used Canvas. Furthermore, only activate the GameObject when the player is within a set proximity to the object through the Unity's Collider system via event triggers.

An example of this would be to declare the GameObject, add collision and then hook it a simple trigger script, like this:

```c#

    public GameObject webviewObject;                                                                            
    [SerializeField] private bool EnablePlayerWebview;
    
    private void OnTriggerEnter(Collider other)
    {    
        if(other.CompareTag("Player") && EnablePlayerWebview) { webviewObject.SetActive(true);   }

    }

    private void OnTriggerExit(Collider other)
    {
        Debug.Log("Exiting");
        webviewObject.SetActive(false);
    } 

```

#### Click and scroll not working : [Case 1]

There could be multiple reasons why click/scroll might not be functional, depending on the operating system, AR/VR tool kits and the Unity's input system.
When defusing the situation, we recommend build multiple test cases with all components mapped out and then using `Debug.Log` to check through all the variables at play.
We been in situations where a foot of a humanoid object was not tagged as a `Player`, thus causing the whole collision engine to be off and not registering the functionality within a scene.

11/30/2022 - We are currently experience this exact situation, so we will be updating these notes to fit accordingly to the issue.

* * *

## UCC

Ultimate Character Controller was the plugin of choice when doing RSDD aka rapid self-destructive development.

Official Documentation [Link](https://opsive.com/support/documentation/ultimate-character-controller/). It is over 300 pages and covers the controller and its interaction within the unity environment.

According to Opsive, their UCC is a professional and kinematic character controller that is designed for flexibility, modularity and performance; we consider it an "AIO" or "All-In-One" library.

* * *

### UCC URP

Grab the invoice number from the plugin purchase and head over to [OPSive Downloads](https://opsive.com/downloads/) with it.
After placing the invoice number into the system, it will give you download integrations for external plugins.

* * *

### UCC Asset Store

Official [Asset Store](https://assetstore.unity.com/packages/tools/game-toolkits/ultimate-character-controller-233710).
Last Release Date: 3.0.3 - Nov 24, 2022

* * *

### UCC Reference

[Opsive Video Collection](https://opsive.com/videos/?pid=923)
[First Person Character Creation](https://www.youtube.com/watch?v=EAuS_0OxyrA)

* * *

### UCC Character

The core of the UCC, Ultimate Character Controller, would be the Character model and its interactivity within the `Scene`, thus these notes are for referencing through the plugin and movement, collision, motion, gravity, abilities and more for the `Humanoid` / `Character`.

* * *

## UCCIS

The `3DUnity` gateway layer will utilize the `UCC Inventory System` , which we can refer to as `UCCIS`, is an inventory system that was designed by Opsive and extended by our `3DUnity`.

### UCC Inventory

The `UCC Inventory` can be broken into modules, that we will refer to as:

- Inventory
- Item
  - Action (Item)
  - Object (Item)
- Attributes
- Currency
- Crafting
- Input

There are more modules within the system but v3 was released in late November 2022 and we still have to read through the notes/documentation && create test cases for each of the additional modules.

#### UCCIS Attributes

The `Attributes` can be referenced throughout the `engine` and are designed to `override, inherit or modify` the value of another attribute; `Attributes` can be utilized to create variants (`Override`, `Inherit` or `Modify`) of Item Definitions.

The `Attributes` can be broken down into three variant types: (As referenced in the documentation)

- Override: Overrides the `parent` attribute value of the given object.
- Inherit: Inherits the `parent` attribute value of the given object.
- Modify: Uses an expression to compute a value that is dependent on the “parent” attribute or any other attribute in the same collection.

### UCCIS References

[Asset Store](https://assetstore.unity.com/packages/tools/game-toolkits/ultimate-inventory-system-166053)
[Inventory Docs](https://opsive.com/support/documentation/ultimate-inventory-system/)

Video Tutorials

[Video Part 1](https://www.youtube.com/watch?v=-AqJ3-BXS70)
[Video Part 2](https://www.youtube.com/watch?v=m0Z-wPFkM9w)

The two part video tutorial goes through a UCC / Inventory integration.

* * *

## Steam

These notes are still a work in progress, but I will try my best to continue to improve them as I am building out the Steam API for the Unity/React Project.
Official [Repo](https://steamworks.github.io/installation/#unity-instructions)

### Before

It seems that before you start to integrate SteamWorks / Steam API / SteamWorksNET , you need an active SteamWorks developer account. You can create the account [here](https://partner.steamgames.com/newpartner/?)

`Legal Name`

Steam Defines it as

>This is really, really important to enter correctly. Carefully read all instructions below. You will be unable to release your product via Steam until this name matches all records.
>The name you enter below must be the legal entity that owns or has rights to publish the game, software or video ("content") and is the legal entity that will be signing the Steam Distribution Agreement. The legal name you enter here must match the name as written on official documents with your bank and on United States IRS tax documents or foreign tax documents if applicable. You will need to enter this name again as your bank account holder and the legal name associated with a tax payer identification number in the following steps.
>If you don’t have a company name and you are the sole owner of your content, please fill in your full name as the Legal Name and your own address as Street Address. If you co-own the content with other individuals, you must form a legal entity to own and receive payments for your content.
>The Legal Name here is for internal use. If you have a DBA or 'friendly name' that you wish to show to customers on your store page, you will be able to enter that separately when creating your store page.

This is an extremely important step, we advise that you consult with your legal parties if there are any major issues.

We recommend that, if you are a US Citizen, have all our personal information (Tax, Bank, KYC, ect...) ready before completing the application. Furthermore, there is a $100 fee for the application.

### After

Well we applied as of 11/23/2022 , so we will wait until everything is confirmed and then move forward with this.

Okay so we been approved, now you should have 1 application credit in your Steamworks profile! This is where you then create your application, using that application credit that you paid $100 for!

Place your application name and then go through the form, it will then spit out some interesting variables:

>Requesting AppID For: KBVE.com RogueJester
>Created package "KBVE.com RogueJester Developer Comp" with ID 802XXX
>Created package "KBVE.com RogueJester for Beta Testing" with ID 802XXX
>Created package "KBVE.com RogueJester" with ID 802XXX
>Added auto-grant to publisher *XXX
>Created store item '518XXX'
>Created store package for store item '518XXX'

You should keep this information safe and as a reference step.

* * *

## Plugins

- Collection of plugins for Unity game engine.

### React

- For React and Unity integration, we recommend going to our [React](https://kbve.com/application/javascript/#react) application page.

### Steam Plugin

We moved the Steam into their own [notes](https://kbve.com/application/unity/#steam)

### SimpleJSON

- SimpleJSON is a plugin for JSON parsing in C#.
- Official [Repo](https://github.com/Bunny83/SimpleJSON)

### Modular AI

- Modular AI helps design the behavior of GameObjects within Unity.
- Official [Repo](https://github.com/Kitbashery/Modular-AI)

### Hey Area Object Spawner

- A simple tool that helps procedural generation of objects within an area.
- Official [Repo](https://github.com/JahnStar/Hey-Area-Object-Spawner)

### Hierarchy 2

- Hierarchy 2 helps organize the Unity UI.
- Official Asset [Store](https://assetstore.unity.com/packages/tools/utilities/hierarchy-2-166483)

### Premium

- Premium plugins that have additional license or costs with them.

### OneJS

- Interpol between Javascript and Unity through JINT
- This plugin is not open source but rather a private engine.

### Webview

Unity plugins that focus on webview by providing abstract layers that extend to controllers.

### UniWebView

- Adding Webview for iOS/Android can be easier through UniWebView, which is an open source web view component for mobile platforms.
- Official [Repo](https://docs.uniwebview.com/api/)

### Vuplex Plugin

A commercial plugin that extends WebView components across all platforms, with major focus on AR/VR development kits for Oculus, Hololens and more.
Notes on the [Vuplex](https://kbve.com/application/unity/#vuplex)

* * *

## Pipeline

For Unity Pipeline we recommend going to our [git](https://kbve.com/application/git/) for information regarding setting up the CI/CD.

## Unity Notes

### Notes

- Unity follows a duel release structure for their engine, a `latest` engine build and a `LTS` engine.
- We recommend using the `LTS` as it has `Long Term Support`, which the company states for about 2 years, whereas the `latest` does not have any extended support.

## Unity Multiplayer

- Colyseus.io seems like the first engine of choice that we might use.
  - Github [Repo](https://github.com/colyseus/colyseus)
  - Colyseus.io [Docs](https://docs.colyseus.io/colyseus/)

- Reference Links
  - Chowdera [1](https://chowdera.com/2021/05/20210512110823582J.html)
  - S1H [2](https://blog.s1h.org/colyseus-multiplayer-game/)

## Error

- Common errors that users might face when working with Unity. This error log is meant to help keep track and may save some future developers a lot of time.

### Error WebGL-000001FEA50EC410

- ```shell
    [.WebGL-000001FEA50EC410] GL_INVALID_FRAMEBUFFER_OPERATION: Draw framebuffer is incomplete
    ```

  - Solution: Turn on post processing on the Main Camera.

### Error libil2cpp ERROR: Could not open Il2CppData/

Currently: There might be an issue when directly loading the Git LFS, so we will reference it via Github's media server.
Git Notes can be found [here](https://kbve.com/application/git)

### Error Dirty Branch

This will be a common error that you will see throughout `CI/CD` and comes from various issues, it can be from the wrong `guid` / `Seralization` or broken `ProjectSettings.asset`

You can ignore the dirty branch errors by using `allowDirtyBuild: true` within the `game-ci`, however this may cause problems down the line when the build gets more complex and additional platforms i.e `WebGl`, `Xbox`, ect...

## Corgi

These are KBVE notes and references for the `Corgi Engine` that was developed by More Mountains. Please note that the core of the Corgi Engine is a private / premium plugin for the Unity Engine, thus parts of our codebase / references will not work `out of the box`, as you will have to install the latest engine from the Unity Asset store.

### Corgi API

### Corgi Documentation

### Corgi Examples

## Unity Canvas

The Canvas is a GameObject within Unity that extends the UI elements and utilizes the EventSystem / Scene View.

## Unity Assets

- Unity Assets are a collection of media files.

## 2D Assets

This is a collection of 2D assets that can be a great resource / reference for anyone looking to make a 2D game. We could migrate the 2D assets into their own reference later down the line.

### PixelFrog

Official [Itch](https://pixelfrog-assets.itch.io/)

Treasure Hunters [Download](https://pixelfrog-assets.itch.io/treasure-hunters)
Kings and Pings [Download](https://pixelfrog-assets.itch.io/kings-and-pigs)
Pixel Adventure [Download](https://pixelfrog-assets.itch.io/pixel-adventure-1)
Pirate Bomb [Download](https://pixelfrog-assets.itch.io/pirate-bomb)

## 2D

These are the notes for Unity's 2D engine and/or projects related to the 2D development cycle.

### Corgi Engine

We are currently test casing the corgi engine as the base for our 2D engine and then going to integrate it with our 2DUnity. As of early December 2022, we are test casing the pipeline with the engine as an underlay and restructuring our `2DUnity` as a gateway layer, a similar setup to our `3DUnity` and `UCC`.

### Corki Namespace

The `Corki` namespace is a KBVE extension of the `Corgi` namespace, adding custom gateway layers that make it easier to infer and interpolate among different APIs.

## 2D Examples

The list below are open source projects that use Unity as their base for 2D/Retro style games.

### Newbark

Official [Repo](https://github.com/itsjavi/newbark-unity)

Itsjavi created an amazing open source proof-of-concept version of classic Pokemon (Red/Blue/Gold) that has been updated to Unity 2021 and has URP. It should be noted that there assets that might be infringing on intellectual property of Nintendo/Game Freak.
On a positive note, upon looking through his repo, I did stumble across a github bot known as [ImgBot](https://kbve.com/application/git/#imgbot), which provides image optimization via Git pulls.

The project uses: 2021.1.6f1 as the Unity Version and there seems to not include any pipeline/workflow, which might be because of the copyright issues.
The project also has [URP / Universal Render Pipeline](https://kbve.com/application/unity/#urp)

I suppose it be interesting to take a look at their combat system, since the biggest issue that I see would be the usage of copyrighted material, but if you were to swap them out, then there might be a case to continue and `enhance` the repo? If anyone might be down to do this, please reach out to h0lybyte.

### Kailius

Official [Repo](https://github.com/Walkator/kailius)

This was another open source 2D repo that sparked my interest because it was built for the phone! It is a great reference point for a game written for Android by going through `input design` from dual perspective of UX/UI and internal scripting.

#### Minor 2Ds

[SpaceWalk Official Repo](https://github.com/Angel1841/Space-Walk)
[FinalProject UnityW2022](https://github.com/DuncanBH/FinalPlatformerProject)