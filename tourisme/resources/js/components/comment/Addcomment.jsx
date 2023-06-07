import React from "react";
import { ThemeContext } from "../Context/context";
export default function Addcomment() {
    const { setImage,setNomplace,setDescription,Addcomment} = React.useContext(ThemeContext)
        return (
            <div class="modal fade" id="exampleModaladdcomment" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">New Comment</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">Name place:</label>
                      <input type="text" class="form-control" id="recipient-name" onChange={(e)=>setNomplace(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">Image:</label>
                      <input type="file" class="form-control" id="recipient-name" onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">Description:</label>
                      <textarea class="form-control" id="message-text" onChange={(e) => setDescription(e.target.value)} ></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" onClick={()=>Addcomment()}>Send Comment</button>
                </div>
              </div>
            </div>
          </div>
        );
}