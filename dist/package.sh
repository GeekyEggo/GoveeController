#!/bin/sh

SOURCE=$(dirname "$0")
pushd "$SOURCE/.."

# Prepare
dotnet restore
rm -rf ./dist/com.geekyeggo.goveecontroller.sdPlugin
rm -rf ./dist/com.geekyeggo.goveecontroller.streamDeckPlugin

# Publish
function publish {
    dotnet publish ./src/GoveeController/ \
        -r $1-x64 \
        -c Release \
        --self-contained true \
        -o dist/com.geekyeggo.goveecontroller.sdPlugin/$1 \
        -p:PublishSingleFile=true \
        -p:EnableCompressionInSingleFile=true
}

publish "win"
publish "osx"

# Package
./dist/DistributionTool.exe -b -i ./dist/com.geekyeggo.goveecontroller.sdPlugin -o ./dist/

popd
