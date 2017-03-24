# About the lib folder

The lib folder is for dependencies that need to be managed outside of npm.

## vis

Vis is managed outside of npm and as a submodule, because at the moment we only use a subset of features from vis.
Vis unfortunately bundles those subsets not in a good way for us to consume them. Therefore we include it with a sub module.
