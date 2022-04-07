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

def streamlit_globe(globeData, daytime='day', key=None):
    _component_func(globeData=globeData, daytime=daytime, key=key, default=0)

if not _RELEASE:
    import streamlit as st

    st.subheader("Globe")
    streamlit_globe(globeData=[{'lat': 49.19788311472706, 'lng': 8.114625722364316, 'size': 0.3, 'color': 'red'}], daytime='day')
