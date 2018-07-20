#!/bin/bash
for i in *
do
	echo "processing image $i..."
	/usr/bin/convert -thumbnail 200 $i thumb.$i
done
