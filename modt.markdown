#ModTools

##Usage
ModTools should be added as a local mod, so that it is always available. Read the No Workshop & Local Mods[LINK] article for more information. The game should be restarted after ModTools is enabled.

###Shortcuts
[ADD KEY FORMATTING]
Ctrl+Q opens the main ModTools menu with some settings and button for opening other windows.
F7 opens the debug console, which is also used for running scripts.
Ctrl+E open the scene explorer.
Ctrl+W opens watches, which allows monitoring values chosen in scene explorer.

###Settings
Both the console and scene explorer have an expandable settings menu in the top left corner.


##Asset Editor
The current prefab loaded in the asset editor can be found in Scene Explorer > Tool Controller > ToolController > m_editPrefabInfo.

Whether or not the changes made there save or not is based on what the game was designed to save, and if something happens to be a reference to some other prefab or object, such as props placed on a building, or effects placed on a prop - these are not part of the actual asset.






###Generic

####m_UIPriority
For assets visible in the menu, this defines the order in which they are sorted. Can be changed using a script or a mod.

####m_UICategory
Sets the UI category the asset appears in. Can be changed using a mod.

####m_dlcRequired
Defines which dlc is required for the asset.

####m_generatedInfo
Contains various measured values, such as the size of the asset.

####m_class
Contains information about what type of asset it is, may also affect UI sub-category. Can be changed using a mod.

####m_color
Color variations, although the actual saved values are inside m_material, which can be changed in the asset editor UI or using a script.

####m_useColorVariations
Controls whether or not the asset uses color variations.


###Building

####m_buildingAI
Defines how the building behaves and what values it has. Can be changed using a mod.

####m_cellLength & m_cellWidth
Defines the size of the lot. Can be changed in the asset editor UI.

####m_cellSurfaces
Contains an array of ground surfaces which can be painted in the asset editor.

####m_class
Contains information about what type and level of building it is. Can be changed using a mod.

####m_circular
Changes the square lot to a circular one, only visible ingame.

####m_expandFrontYard
For growables, changes where the yard for props is.

####m_fixedHeight
Controls whether or not the height of the building might automatically change, for example - when the water level changes.

####m_flattenFullArea
Completely flattens the entire lot of the building.

####m_flattenTerrain
The usual, less aggressive flattening of the lot area.

####m_fullGravel & m_fullPavement
Covers the entire lot in this surface paint.

####m_paths
May contain an array of networks placed on the lot, such as pedestrian paths, roads, train tracks.

####m_placementMode
Controls how the building is plopped, read more in the building article.[LINK]

####m_placementStyle
Defines how the building is placed, ploppable buildings are manual, while growables are automatic, and sub-buildings are procedural.

####m_props
May contain an array of the props which are plopped on the building.

####m_requireHeightMap
True for buildings which use the fence shader to conform to the terrain.

####m_requireWaterMap
True for buildings which use the floating shader to float in the water.

####m_subBuildings
May contain an array of sub-buildings.

####m_subMeshes
May contain an array of sub-meshes.

####m_zoningMode
Defines whether a growable is a regular building or a corner building.



###Prop

####m_createRuining
Controls whether or not the prop shows the ruined texture under it. Can be changed in the asset editor UI.

####m_effects
May contain an array of effects, such as light effects for a lamp. Can be changed in the asset editor UI.

####m_illuminationBlinkType
Defines the kind of blinking the illumination has. Can be changed using a script.

####m_illuminationOffRange
Controls when the illumination turns off based on time of day. Can be changed using a script.

####m_maxScale & m_minScale
Controls the random size variation.

####m_placementStyle
Defines how the prop is placed, most props are manual, but some - such as the garbage bin, are automatic.

####m_parkingSpaces
May contain parking spaces for cars. Can be changed using a script.

####m_specialPlaces
May contain sitting places for chairs. Can be changed using a script.

####m_requireHeightMap
True for props which use the fence shader to conform to the terrain.

####m_requireWaterMap
True for props which use the floating shader to float in the water, although these props likely must be part of a building or network to appear.

####m_variations
May contain an array of other props, which get plopped instead of the main prop based on probabilities. Can be changed using a script and then asset editor UI.



###Tree

####m_createRuining
Controls whether or not the prop shows the ruined texture under it. Can be changed in the asset editor UI.

####m_defaultColor
Affects the color of the leaves, as defined by the color map.

####m_maxBrightness & m_minBrightness
Defines the random brightness variation.

####m_maxScale & m_minScale
Controls the random size variation.

####m_variations
May contain an array of other trees, which get plopped instead of the main tree based on probabilities. Can be changed using a script and then asset editor UI.



###Vehicle

Many vehicle properties can be changed using the Extended Asset Editor.[LINK]

####m_acceleration
Controls how quickly the vehicle increases speed, may also affect max speed.

####m_attachOffsetBack & m_attachOffsetFront
Defines the placement of trailers.

####m_braking
Controls how quickly the vehicle decreases speed.

####m_dampers
Defines how quickly the suspension returns to the default state.

####m_doors
Contains an array of doors, where citizens will enter or exit the vehicle.

####m_effects
Contains an array of effects such as lights, sounds, and particles.

####m_generatedInfo
In addition to the regular measured values, also contains tire(wheel) properties.

####m_isLargeVehicle
True for big vehicles such as planes or ships.

####m_leanMultiplier
Defines how much the vehicle leans to the sides when turning.

####m_maxSpeed
Defines the max speed of the vehicle, 1 equals 6.25 km/h.

####m_nodMultiplier
Defines how much the vehicles nods forward/backward when braking or accelerating.

####m_springs
Defines how much the suspension moves.

####m_subMeshes
May contain an array of sub-meshes.

####m_trailers
May contain an array of trailers.

####m_turning
Defines how well the car corners.

####m_vehicleAI
Controls what type of vehicle it is and how it behaves, can be changed with a mod.



###Citizen

####m_citizenAI
Controls what type of citizen it is and how it behaves, can be changed with a mod.

####m_class
Contains information about what type and level of citizen it is. Can be changed using a mod.

####m_walkSpeed
Defines how fast the citizen walks.



###Network

####m_enableMiddleNodes
If this is disabled, every node will be an intersection. This is disabled for train or monorail station tracks so they always have the track cross node, and also for road slope(tunnel entrance) networks.

####m_class.m_level
Networks which have different levels activate the transition node flag when intersecting, this used for transitions between normal sunken roads and ground-level highways or the gravel road.

####m_netAI
Controls what type of network it is and how it behaves, can be changed with a mod.

####m_setCitizenFlags
Activates flags for citizens currently using this network, used for hiding citizens in tunnels.

####m_setVehicleFlags
Activates flags for vehicles currently using this network, used for hiding vehicles in tunnels and enabling the gravel dust particles on the gravel road.

####m_useFixedHeight
True for station tracks and depot roads which are part of buildings, so they don't align to the terrain when such buildings are built on uneven terrain.



##Prefabs
###Base Game
###Expansion
###Custom

##Theme Textures and Properties

##Render Properties

##Camera Properties
