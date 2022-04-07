import os
import streamlit.components.v1 as components

_RELEASE = True

if not _RELEASE:
    _component_func = components.declare_component("streamlit_globe", url="http://localhost:3001",
    )
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component("streamlit_globe", path=build_dir)

def streamlit_globe(pointsData, labelsData, daytime='day', width=600, height=600, key=None):
    _component_func(pointsData=pointsData, labelsData=labelsData, daytime=daytime, width=width, height=height, key=key, default=0)

if not _RELEASE:
    import streamlit as st

    st.subheader("Globe")
    pointsData=[{'lat': 49.19788311472706, 'lng': 8.114625722364316, 'size': 0.3, 'color': 'red'}]
    labelsData=[{'lat': 49.19788311472706, 'lng': 8.114625722364316, 'size': 0.3, 'color': 'red', 'text': 'Landau'}]
    streamlit_globe(pointsData=pointsData, labelsData=labelsData, daytime='day', width=800, height=600)
